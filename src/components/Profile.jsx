import { FaGithub } from "react-icons/fa";
import { SiQiita, SiX } from "react-icons/si";
import { Link } from 'react-router-dom';
import { GetProfileImage } from "../lib/GetProfileImage";

export function Profile() {
  const dataProfileImage = GetProfileImage();

  return (
    <section className="card">
      <h2 className="text-3xl font-bold mb-8">
        About Me
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        {/* 左：文章 */}
        <div className="w-full md:w-2/3 space-y-4">
          <div>
            <p className="text-xl font-semibold">
              大槻 和輝
            </p>
            <p className="text-gray-500">
              大阪出身
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              自己紹介
            </p>
            <p className="leading-7 max-w-xl">
              エンジニアで大事にしていることは、<br />
              「課題を見つけ、少しでも改善すること」です。<br />
              営業経験や業務、個人開発を通じ、<br />
              課題を解決することが大切だと考えているからです。<br />
              現在はバックエンドだけでなくフロントエンドなどを使って<br />
              企画からリリースまでを開発しています。
            </p>
            <Link to="/ProfileDetail" className="text-blue-500 hover:underline">
              More →
            </Link>
          </div>
        </div>

        {/* 右：画像 + SNS */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
          <img
            src={dataProfileImage.data.publicUrl}
            alt="Profile"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full object-cover"
          />

          <div className="flex gap-4">
            <a
              href="https://github.com/o68606007-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://qiita.com/o68606007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <SiQiita />
            </a>

            <a
              href="https://x.com/Otsuki59595977"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <SiX />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}