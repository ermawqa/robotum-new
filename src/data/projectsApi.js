// src/data/projectsApi.js
import { supabase } from "@lib/supabaseClient";

/**
 * Base column list for all project queries.
 * Must match your actual DB schema.
 */
const PROJECT_FIELDS = `
  id,
  created_at,
  slug,
  title,
  category,
  summary,
  description,
  team_name,
  used_tools,
  future_plans,
  cover_url,
  tags,
  is_featured
`;

/**
 * Fetch featured projects (for homepage section)
 */
export async function fetchFeaturedProjects({ limit } = {}) {
  let query = supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .eq("is_featured", true)              // ✅ correct column
    .order("created_at", { ascending: false });

  if (typeof limit === "number") {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error loading featured projects:", error);
    throw error;
  }

  return data ?? [];
}

/**
 * Fetch a single project by slug (for ProjectDetail page)
 */
export async function fetchProjectBySlug(slug) {
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Error loading project by slug:", error);
    throw error;
  }

  return data; // can be null if not found
}

/**
 * Fetch projects with optional filters (for Projects list page).
 */
export async function fetchProjects(options = {}) {
  const {
    category,
    // status,    // ❌ comment out unless you actually add this column
    teamName,
    tag,
    search,
    isFeatured,
  } = options;

  let query = supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .order("created_at", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  // If you *do* later add a `status` column, you can restore this:
  // if (status) {
  //   query = query.eq("status", status);
  // }

  if (teamName) {
    query = query.eq("team_name", teamName);
  }

  if (typeof isFeatured === "boolean") {
    query = query.eq("is_featured", isFeatured);   // ✅ correct
  }

  if (tag) {
    query = query.contains("tags", [tag]);
  }

  if (search) {
    const pattern = `%${search}%`;
    query = query.or(`title.ilike.${pattern},summary.ilike.${pattern}`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error loading projects with filters:", error);
    throw error;
  }

  return data ?? [];
}