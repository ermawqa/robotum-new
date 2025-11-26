import { supabase } from "@lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import AdminLayout from "@components/admin/AdminLayout";
import Button from "@components/ui/Button";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <>
      <AdminLayout
        title="Admin Dashboard"
        description="Manage RoboTUM content and internal data."
      >
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            to="/admin/faqs"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 hover:bg-white/10 transition block"
          >
            <h3 className="text-white font-semibold mb-2">FAQs</h3>
            <p className="text-white/70 text-sm">
              View, edit, and create frequently asked questions.
            </p>
          </Link>

          {/* later: Partners */}
          {/* later: Projects */}
          {/* later: Events */}
          {/* later: Applications */}
          {/* later: Members */}

        </div>
      </AdminLayout>
    </>
  );
}