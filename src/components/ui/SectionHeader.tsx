type Props = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
};

export function SectionHeader({ title, subtitle, actionLabel }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs text-gray-500 md:text-sm">{subtitle}</p>
        )}
      </div>

      {actionLabel && (
        <button className="hidden rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium text-gray-700 hover:border-blue-500 hover:text-blue-500 md:inline-flex">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
