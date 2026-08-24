import { supabase } from '../utils/supabase';
import { Link } from 'react-router-dom';

export function Projects({ data }) {
  return (
    <section className="border-t border-gray-300 mt-12 pt-12">
      <h2 className="text-3xl font-bold mb-2">
        Projects
      </h2>
      <p className="text-xl font-semibold mb-2">
        開発したアプリケーション
      </p>
      <p className="leading-7 mb-6">
        取り組んだプロジェクトの一部を紹介します。<br />
        発案からリリース、その後の改善まで、自ら取り組んだプロジェクトです。<br />
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {data?.map((portfolio) => {
          const dataImage = supabase.storage
            .from('images')
            .getPublicUrl(portfolio.image);

          return (
            <Link
              key={portfolio.id}
              to={`/ProjectsDetail/${portfolio.id}`} 
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={dataImage.data.publicUrl}
                alt={portfolio.title}
                className="w-full h-48 object-cover"
              />

              <div className="card-body flex flex-col">
                <h3 className="card-title">
                  {portfolio.title}
                </h3>

                <p className="text-sm leading-6">
                  {portfolio.describe}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}