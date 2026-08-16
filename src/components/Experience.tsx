export function Experience() {
  return (
    <section className="card">
      <h2 className="text-3xl font-bold mb-6">
        Experience
      </h2>

      <div className="space-y-6">

        {/* 2026/07 - 現在 */}
        <div className="border-l-4 pl-4">
          <p className="text-sm text-gray-500">
            2026/07 - 現在
          </p>

          <h3 className="text-xl font-bold mt-1">
            イメージワークフローシステムの初期構築
          </h3>

          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>ワークフローの開発・選定</li>
            <li>システムDBの設計・構築</li>
          </ul>

          <p className="mt-3">
            <span className="font-semibold">使用技術：</span>
            Java / Oracle / Spring / AWS
          </p>
        </div>

        {/* 2025/06 - 2026/06 */}
        <div className="border-l-4 pl-4">
          <p className="text-sm text-gray-500">
            2025/06 - 2026/06
          </p>

          <h3 className="text-xl font-bold mt-1">
            証券システムの単純EOS対応・多要素認証対応
          </h3>

          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>単純EOS・多要素認証対応の調査・設計</li>
            <li>リダイレクト処理の対応</li>
          </ul>

          <p className="mt-3">
            <span className="font-semibold">使用技術：</span>
            Java / JavaScript / Oracle / Struts / Spring
          </p>
        </div>

        {/* 2025/01 - 2025/05 */}
        <div className="border-l-4 pl-4">
          <p className="text-sm text-gray-500">
            2025/01 - 2025/05
          </p>

          <h3 className="text-xl font-bold mt-1">
            口座振替システム開発
          </h3>

          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>新システムにおけるジョブフローの設計・構築</li>
            <li>バッチ開発</li>
          </ul>

          <p className="mt-3">
            <span className="font-semibold">使用技術：</span>
            Java / Oracle / GitHub Actions / Spring
          </p>
        </div>

      </div>
    </section>
  );
}