// src/data/projectsApi.js
import { supabase } from "@lib/supabaseClient";

/**
 * Base column list for all project queries.
 * Adjust once here if you add/remove fields in the DB.
 */
const PROJECT_FIELDS = `
  id,
  created_at,
  slug,
  title,
  tags,
  is_feature,
  category,
  description,
  summary,
  status,
  team_name,
  used_tools,
  future_plans,
  cover_url
`;

/**
 * Fetch featured projects (for homepage section)
 * - Only is_feature = true
 * - Ordered by created_at DESC (newest first)
 * - Optional limit
 */
export async function fetchFeaturedProjects({ limit } = {}) {
  let query = supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .eq("is_feature", true)
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
    .maybeSingle(); // returns null if not found

  if (error) {
    console.error("Error loading project by slug:", error);
    throw error;
  }

  return data; // can be null if not found
}

/**
 * Fetch projects with optional filters (for Projects list page).
 * This is generic so your tabs can translate to these filters.
 *
 * options:
 *  - category: enum value from project_category
 *  - status: enum value from project_status
 *  - teamName: exact team_name match
 *  - tag: filter projects that have this tag in tags[]
 *  - search: full-text-ish search on title/summary (simple ILIKE)
 *  - isFeatured: true/false if you want to filter by feature flag
 */
export async function fetchProjects(options = {}) {
  const {
    category,
    status,
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

  if (status) {
    query = query.eq("status", status);
  }

  if (teamName) {
    query = query.eq("team_name", teamName);
  }

  if (typeof isFeatured === "boolean") {
    query = query.eq("is_feature", isFeatured);
  }

  if (tag) {
    // checks if `tag` exists in tags[]
    query = query.contains("tags", [tag]);
  }

  if (search) {
    // simple case-insensitive search on title + summary
    // (you can later switch to full-text search)
    const pattern = `%${search}%`;
    query = query.or(
      `title.ilike.${pattern},summary.ilike.${pattern}`
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error loading projects with filters:", error);
    throw error;
  }

  return data ?? [];
}