interface DocsPageProps {
  params: {
    slug?: string[];
  };
}

export default function DocsPage({ params }: DocsPageProps) {
  const slug = params.slug || [];

  let title = "Docs Page";
  let description = "Browse our documentation.";

  if (slug.length === 1) {
    title = `View: ${slug[0]}`;
    description = "This is a detailed description of the feature.";
  } else if (slug.length === 2) {
    title = `View: ${slug[0]} → ${slug[1]}`;
    description = "You're viewing a specific concept under the selected feature.";
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
