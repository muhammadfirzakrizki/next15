export const metadata = {
  title: {
    absolute: 'Blog',
  },
};

// Fungsi server component
export default async function Blog() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page of our Next.js application.</p>
    </div>
  );
}
