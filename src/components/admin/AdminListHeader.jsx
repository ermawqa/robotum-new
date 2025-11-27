import Button from "@components/ui/Button";

export default function AdminListHeader({
  title,
  buttonLabel,
  onButtonClick,
  buttonVariant = "secondary",
  size = "sm",
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-white/80">{title}</h2>
      {buttonLabel && onButtonClick && (
        <Button size={size} variant={buttonVariant} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
