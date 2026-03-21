import { useRoute } from "wouter";
import { Redirect } from "wouter";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  return <Redirect to={`/products?category=${params?.slug || ""}`} />;
}
