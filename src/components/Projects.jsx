import { supabase } from '../utils/supabase';
import { Link } from 'react-router-dom';

export function Projects({ data }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">
        Projects
      </h2>
      <p>
        これまでに取り組んだプロジェクトの一部を紹介します。<br />
        発案からリリース、その後の改善まで実施したものを紹介します。<br />
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {data?.map((portfolio) => {
          const dataImage = supabase.storage
            .from('images')
            .getPublicUrl(portfolio.image);

          return (
            <div
              key={portfolio.id}
              className="card bg-base-100 shadow-xl overflow-hidden"
            >
              <img
                src={dataImage.data.publicUrl}
                alt={portfolio.title}
                width={200}
                className="w-full h-48 object-cover"
              />

              <div className="card-body">
                <h3 className="card-title">
                  {portfolio.title}
                </h3>

                <p className="text-sm leading-6">
                  {portfolio.describe}
                </p>
                <Link to={`/ProjectsDetail/${portfolio.id}`} className="text-blue-500 hover:underline">
                  詳細はこちら
                </Link>

                {/* <div className="card-actions justify-end mt-4">
                  <a
                    href={portfolio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-blue-500 hover:underline"
                  >
                    サイト<br />
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mt-2">
                    {portfolio.article_url && (
                      <a
                        href={portfolio.article_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        プロジェクトの記事
                      </a>
                    )}
                  </p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}