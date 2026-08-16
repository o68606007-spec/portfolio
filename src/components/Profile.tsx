import { FaGithub } from "react-icons/fa";
import { SiQiita, SiX } from "react-icons/si";
import { supabase } from "../utils/supabase";

export function Profile() {
  const dataProfileImage = supabase.storage.from('images').getPublicUrl('portfolio/profile.png');

  return (
    <section className="card">
      <h2 className="text-3xl font-bold mb-6">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        {/* 左：文章 */}
        <div className="space-y-4">
          <div>
            <p className="text-xl font-semibold">
              大槻 和輝
            </p>
            <p className="text-gray-500">
              大阪出身
            </p>
          </div>

          <p className="leading-7">
            好奇心が強く、粘り強い性格です。
            <br />
            現在は金融業界のシステム開発に携わっています。
          </p>
        </div>

        {/* 右：画像 + SNS */}
        <div className="flex flex-col items-center gap-4">
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