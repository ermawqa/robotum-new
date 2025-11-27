// src/components/admin/AdminSideCard.jsx
export default function AdminSideCard({ title, description, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5">
      {(title || description) && (
        <div className="mb-3 space-y-1">
          {title && (
            <h2 className="text-sm font-semibold text-white/80">{title}</h2>
          )}
          {description && (
            <p className="text-xs text-white/60">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
