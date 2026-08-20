import { supabase } from "../utils/supabase";
import { Link } from 'react-router-dom';
import { GetPortfolioDataBigFive } from "../lib/GetPortfolioDataBigFive"
import { GetPrivateImage } from "../lib/GetPrivateImage";

export function ProfileDetail() {
  const dataPrivateImage = GetPrivateImage();
  const dataPersonalImage = GetPortfolioDataBigFive();
  return (
    <section className="card">
      <h2 className="text-3xl font-bold mb-6">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        <div className="space-y-4">
          <div>
            <p className="text-xl font-semibold">
              大槻 和輝
            </p>
            <p className="text-gray-500">
              大阪出身
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
          <img
            src={dataPrivateImage.data.publicUrl}
            alt="Profile"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full object-cover"
          />
          </div>

          <h3 className="text-xl font-semibold">
            どんな人？
          </h3>
          <p className="text-gray-500">
            小さなことでも積み重ね、続ける人
          </p>

          <h3 className="text-xl font-semibold">
            どんな性格？
          </h3>
          <div className="leading-7 flex justify-center">
            <img src={dataPersonalImage.data.publicUrl}
              alt="Profile"
              width={500}
              height={500}
              className="w-60 h-60 rounded-full object-cover snap-center"
            />
          </div>
            <p className="text-lg mt-4">
              好奇心が高く、読書やスポーツして休日は過ごしています。
            </p>
          <h3 className="text-xl font-semibold">
            組織として目指すこと
          </h3>
          <p>
            利益、成果につながる行動をすることです。<br />
            また、不備やミスで言いづらい雰囲気のチームより、意見が言いやすい環境を大切にしたいです。
          </p>
          <h3 className="text-xl font-semibold">
            個人として目指すこと
          </h3>
          <p>
            技術を目的とせず、課題を解決とする手段として活用することです。<br />
            最小限の説明でも直感的に楽しめるようなサービスやデザインを追求していきたいです。
          </p>
          <h3 className="text-xl font-semibold">
            他人からの自分
          </h3>
          <ul>
            <li>分析の力が強い</li>
            <li>業務外から学んだことを業務につなげてみようとしている</li>
          </ul>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:underline">
        戻る
      </Link>
    </section>
  );
}