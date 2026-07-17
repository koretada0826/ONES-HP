// Content extracted from ones-mg.com sub-pages

export const SUBPAGE_IMAGES = {
  companyHero: "https://ones-mg.com/company-hero.jpg",
  serviceHero: "https://ones-mg.com/service-hero.jpg",
  missionPoints: [
    "https://ones-mg.com/mission-point1.jpg",
    "https://ones-mg.com/mission-point2.jpg",
    "https://ones-mg.com/mission-point3.jpg",
  ],
  serviceEx: [
    "https://ones-mg.com/service-ex01.jpg",
    "https://ones-mg.com/service-ex02.jpg",
    "https://ones-mg.com/service-ex03.jpg",
  ],
  tool: [
    "https://ones-mg.com/tool-01.jpg",
    "https://ones-mg.com/tool-02.jpg",
    "https://ones-mg.com/tool-03.jpg",
  ],
  case: {
    gym: "https://ones-mg.com/case-gym.jpg",
    esthe: "https://ones-mg.com/client-esthe.png",
    cosme: "https://ones-mg.com/client-beauty.jpg",
    onsen: "https://ones-mg.com/client-hospitality.jpg",
    beauty: "https://ones-mg.com/case-beauty.jpg",
    kids: "https://ones-mg.com/client-kids.png",
    care: "https://ones-mg.com/client-welfare.jpg?v=2",
  } as Record<string, string>,
};

export const COMPANY_PAGE = {
  labelEn: "COMPANY",
  ja: "会社紹介",
  lead: "サービス業の未来を創る。人が生み出す価値の最大化。",
  heroImage: SUBPAGE_IMAGES.companyHero,
  mission: {
    labelEn: "OUR VISION",
    title: "MISSION",
    copy: "サービス業の未来を創る。\n人が生み出す価値の最大化。",
    points: [
      {
        text: "店舗管理業務の効率化、ルール・ライフライン構築による、サービス業のパフォーマンス最大化。",
        image: SUBPAGE_IMAGES.missionPoints[0],
      },
      {
        text: "現場ファーストの社内制度構築による、人材定着など安定した経営基盤の構築。",
        image: SUBPAGE_IMAGES.missionPoints[1],
      },
      {
        text: "多種多様なサービス事業者様へ、地域を超えたグローバル展開を目指す。",
        image: SUBPAGE_IMAGES.missionPoints[2],
      },
    ],
  },
  profile: [
    { label: "商号", value: "株式会社ONES\nONES Inc." },
    { label: "本店", value: "静岡県藤枝市藤岡1-14-7\n※活動拠点：東京都江東区" },
    { label: "創業", value: "2023年12月19日" },
    { label: "資本金", value: "1,000,000円" },
    {
      label: "主な事業内容",
      value:
        "店舗型サービス業の経営／運営支援事業\n新規事業／開業支援事業\n経営チーム参画型パートナーサービス\n健康関連アイテム販売代理店事業\nサウンドディレクション事業（スポーツイベント）",
    },
    { label: "取引銀行", value: "三菱UFJ銀行　静岡銀行" },
  ],
};

export const PRODUCT_PAGE = {
  labelEn: "SERVICE",
  ja: "サービス紹介",
  lead: "事業の課題整理から戦略立案まで、現場に寄り添った支援を提供します。",
  heroImage: SUBPAGE_IMAGES.serviceHero,
  main: {
    labelEn: "MAIN SERVICE",
    title: "店舗経営 / 運営サポート",
    tag: "接客に集中できる環境をつくるために。",
    desc:
      "バックオフィスの効率化から戦略立案まで、サービス業のパフォーマンス向上を支援いたします。",
  },
  ex: [
    {
      no: "EX.01",
      title: "戦略立案伴走",
      image: SUBPAGE_IMAGES.serviceEx[0],
      desc:
        "事業の課題整理から優先順位付けまで、短期〜長期を見据えた戦略立案の伴走を行います。現状分析をもとに実行可能なロードマップを共同で策定し、PDCAサイクルを回しながら継続的な成長をサポートします。経営者・店長の右腕として、現場に寄り添った支援を提供します。",
    },
    {
      no: "EX.02",
      title: "マニュアル制作",
      image: SUBPAGE_IMAGES.serviceEx[1],
      desc:
        "マニュアルは持続可能な経営に向けて、これまでのノウハウを言語化・構造化し、複数スタッフで業務を標準化するために制作します。０から制作することも、既存物をアップデートすることも可能です。接客マニュアル、店舗オペレーションマニュアル、採用・研修マニュアルなど幅広く対応いたします。",
    },
    {
      no: "EX.03",
      title: "オーダーメイドツール制作",
      image: SUBPAGE_IMAGES.serviceEx[2],
      desc:
        "店舗スタッフが、事務作業ではなく接客に集中し、戦略的に店舗運営を継続するための土台として、業務効率化やデータ分析のためのツールをオーダーメイドで制作いたします。",
    },
  ],
  tool: {
    labelEn: "TOOL DETAIL",
    title: "オーダーメイドツール",
    desc:
      "現在ご利用されている予約システムなどとは別に、店舗独自の集計や分析ができるツールを制作します。",
    features: [
      {
        no: "#01",
        subtag: "自由にカスタマイズ",
        title: "カスタマイズ可能なデータ集計・可視化",
        image: SUBPAGE_IMAGES.tool[0],
        points: [
          "既定システムでは把握が難しいような細かい数字も可視化が可能",
          "スプレッドシートやExcelを活用したシンプルで誰でも使いやすい設計",
        ],
      },
      {
        no: "#02",
        subtag: "独自目標に対応",
        title: "店舗独自のKPIの進捗管理機能",
        image: SUBPAGE_IMAGES.tool[1],
        points: [
          "店舗ごとの経営目標に応じたKPI管理がデイリー単位で確認可能",
          "達成率や進捗状況をリアルタイムで可視化",
        ],
      },
      {
        no: "#03",
        subtag: "事務作業を自動化",
        title: "在庫/売上管理機能など事務作業効率化",
        image: SUBPAGE_IMAGES.tool[2],
        points: [
          "売上データと連携した管理表を作成し商品ごとの売上・在庫状況を一目で確認可能",
          "無駄な在庫を減らし販売戦略の最適化を実現",
        ],
      },
    ],
  },
};

export const CASE_PAGE = {
  labelEn: "CASE",
  ja: "事例紹介",
  lead: "これまでご支援してきたさまざまな事例の一部をご紹介いたします。",
  heroImage: SUBPAGE_IMAGES.case.beauty,
  intro:
    "美容・フィットネス・ホスピタリティ・介護など、幅広い業種のサービス事業者様のマニュアル制作・組織設計をサポートしてきました。",
  disclaimer: "※秘匿性の観点から詳細情報は一部伏せております。",
  categories: [
    "すべて",
    "BEAUTY & WELLNESS",
    "HOSPITALITY & RETAIL",
    "WELFARE & CARE",
    "FITNESS & SPORTS",
  ],
  cases: [
    {
      id: "gym",
      category: "FITNESS & SPORTS",
      industry: "パーソナルジム",
      client: "パーソナルジム（2店舗目開業準備）",
      subtitle: "代表の属人的運営から脱却する",
      title: "業務の「型化」とマニュアル整備",
      tasks: ["オペレーションマニュアル", "接客マニュアル", "フランチャイズマニュアル"],
      challenge:
        "代表1名の試行錯誤によって運営されており、業務全体が属人化していました。2店舗目の開業を見据え、スタッフが変わっても同じ品質でオペレーションを回せる仕組みが必要でした。",
      solution:
        "代表の暗黙知を洗い出し、業務の「型化」を実施。日々のオペレーションから接客対応、フランチャイズ展開に向けたFC向けマニュアルまで、3種のマニュアルを体系的に整備しました。属人的な感覚値を再現可能な形に落とし込み、誰でも一定水準で動ける環境を構築しました。",
    },
    {
      id: "esthe",
      category: "BEAUTY & WELLNESS",
      industry: "エステティックサロン",
      client: "エステティックサロン",
      subtitle: "アナログ管理を自動化する",
      title: "KPI集計・記録ツールの導入",
      tasks: ["自動集計ツール開発", "自動記録ツール開発", "KPIマネジメント設計"],
      challenge:
        "KPI管理をはじめとする業務運営がアナログベースで行われており、集計・記録に多くの工数が割かれていました。経営判断に必要なデータが整理されず、効果的なマネジメントが難しい状態でした。",
      solution:
        "業務フローをヒアリングし、自動集計ツールおよび自動記録ツールを開発・導入。集計業務を大幅に効率化し、必要なKPIデータをリアルタイムで可視化できる環境を整えました。データに基づいた効果的なKPIマネジメントを実現し、経営の意思決定スピードを向上させました。",
    },
    {
      id: "cosme",
      category: "HOSPITALITY & RETAIL",
      industry: "化粧品・小売",
      client: "国内化粧品メーカー（海外出店）",
      subtitle: "海外出店を支える",
      title: "日本語・現地語 店舗オペレーションマニュアル",
      tasks: [
        "店舗オペレーションマニュアル（日本語版）",
        "店舗オペレーションマニュアル（現地語版）",
      ],
      challenge:
        "海外への店舗出店にあたり、日本と同水準のオペレーションを現地スタッフに浸透させる必要がありました。言語の壁を越えて、ブランドの品質基準を正確に伝えられるマニュアルが求められていました。",
      solution:
        "国内オペレーションの基準を整理し、店舗運営の全工程を網羅した日本語版マニュアルを作成。あわせて現地語版も制作し、海外スタッフが自立して動けるよう言語・表現を最適化しました。二言語対応により、本部管理と現地運営の両方をカバーする仕組みを整備しました。",
    },
    {
      id: "onsen",
      category: "HOSPITALITY & RETAIL",
      industry: "温泉旅館",
      client: "温泉旅館",
      subtitle: "クレームを削減し品質を統一する",
      title: "清掃マニュアルの策定・導入",
      tasks: ["清掃マニュアル策定", "清掃フロー標準化", "品質チェックシート作成"],
      challenge:
        "清掃業務が属人的になっており、スタッフによって作業の抜け漏れや品質のばらつきが発生。清掃に起因するクレームが多数寄せられており、顧客満足度の低下が懸念されていました。",
      solution:
        "熟練スタッフの清掃ノウハウをヒアリング・観察によって言語化し、誰でも同水準で実施できる清掃マニュアルを策定・導入。作業手順を写真付きで可視化し、チェックシートを整備することでクレームの大幅な削減と品質の均一化を実現しました。",
    },
    {
      id: "beauty",
      category: "BEAUTY & WELLNESS",
      industry: "ビューティーサロン",
      client: "トータルビューティーサロン（ネイル・アイブロウ・アイラッシュ）",
      subtitle: "属人化した業務を標準化する",
      title: "マニュアル整備と統合ダッシュボード構築",
      tasks: [
        "全工程マニュアル制作",
        "統合ダッシュボード開発",
        "KPI管理設計",
        "業務標準化支援",
      ],
      challenge:
        "複数店舗展開を見据える中、接客・技術・オペレーション・清掃にいたるあらゆる業務が担当者の感覚に依存しており、ノウハウがブラックボックス化していました。また、ホットペッパービューティーとLステップという2つの予約経路を持ちながら、データを横断的に管理できる仕組みがなく、KPI管理が後手に回っていました。",
      solution:
        "まず業務全体を洗い出し、属人化していたノウハウを言語化・構造化。接客・技術・オペレーション・清掃に至るすべてのプロセスをマニュアルに落とし込みました。あわせて、2つの予約経路から入るデータを統合したオリジナルダッシュボードを開発し、KPIをリアルタイムで一元管理できる環境を整備。将来の多店舗展開を見据えた、再現性ある経営の土台を構築しました。",
    },
    {
      id: "kids",
      category: "FITNESS & SPORTS",
      industry: "キッズスポーツ",
      client: "キッズスポーツスクール（新規立ち上げ）",
      subtitle: "ゼロから事業基盤を構築する",
      title: "安全管理・規約整備とインストラクター制度設計",
      tasks: [
        "規約・安全管理規程の整備",
        "インストラクター教育制度設計",
        "教科カリキュラム設計",
        "新規事業立ち上げ支援",
      ],
      challenge:
        "既存の根幹事業とは全く異なる分野で、キッズスポーツスクールをゼロから立ち上げるプロジェクトでした。子どもを対象とする事業特有の安全管理や法的整備が必要であり、インストラクターの採用・育成体制も一から構築しなければならない状況でした。",
      solution:
        "事業スタートの基盤となる規約・安全管理規程・緊急対応フローなど、ディフェンス面のライフラインを優先的に整備。子どもの安全を守る体制を確立した上で、インストラクターの教育プログラムおよび教科カリキュラムの設計を実施しました。事業の骨格となる仕組みを丸ごと構築し、スムーズなスクール開業をサポートしました。",
    },
    {
      id: "care",
      category: "WELFARE & CARE",
      industry: "介護施設",
      client: "介護施設（M&A後の体制整備）",
      subtitle: "M&A後の組織を再構築する",
      title: "組織要件整理と職務要件の制定",
      tasks: ["組織要件の整理", "職務要件の制定", "役割・指示系統の明確化"],
      challenge:
        "度重なるM&Aにより組織構造が乱雑化しており、現場スタッフの役割や業務要件が不明確になっていました。誰が何をすべきか不透明な状態が続き、現場の連携不足や混乱が生じていました。",
      solution:
        "現場へのヒアリングをもとに組織要件を整理し、各ポジションにおける職務要件を明文化・制定。役割と責任の範囲を明確にすることで指示系統を整理し、現場の自律的な動きを促進。スタッフが自信を持って業務に取り組める組織体制を構築しました。",
    },
  ],
};
