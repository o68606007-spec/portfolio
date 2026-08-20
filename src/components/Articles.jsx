import { supabase } from "../utils/supabase";

export function Articles({ articles }) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">
        Articles
      </h2>

      <div className="mb-8">
        <h3 className="text-3xl font-extrabold tracking-tight">
          Qiita
        </h3>
        <p className="mt-2 text-muted">
          Qiita に投稿した技術記事ピックアップ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles &&
          articles.map((article) => {
            const dataImage = supabase.storage
              .from("images")
              .getPublicUrl(article.image);

            return (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* 画像 */}
                <div className="overflow-hidden">
                  <img
                    src={dataImage.data.publicUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* カード本文 */}
                <div className="p-5">
                  <h4 className="text-lg font-bold leading-relaxed group-hover:text-blue-500">
                    {article.title}
                  </h4>

                  <p className="mt-4 text-sm text-gray-500">
                    Qiitaで読む →
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
}