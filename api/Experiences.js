// inu와 techeer 아이콘 경로를 실제 파일 경로 또는 URL로 수정해야 합니다.
// 예시: const inu = '/path/to/inu.png'; 또는 const inu = 'https://example.com/inu.png';
// 현재 코드에서는 정의되어 있지 않으므로, 실제 사용 시에는 이 부분들을 정의해야 합니다.
// const inu = "inu_icon_placeholder"; // 실제 아이콘 경로 또는 데이터로 대체하세요.
// const techeer = "techeer_icon_placeholder"; // 실제 아이콘 경로 또는 데이터로 대체하세요.

const experiences = [
  {
    title: "인천대 컴퓨터공학부",
    company_name: "인천대학교",
    // icon: inu, // 아이콘 변수가 정의되어 있지 않아 주석 처리합니다. 필요시 주석을 해제하고 변수를 정의하세요.
    iconBg: "#E6DEDD",
    date: "Mar 2020 - present",
    points: [
      "인천대학교 컴퓨터공학부에 입학하여 컴퓨터 공학의 기초를 다짐.",
      "프로그래밍 언어, 데이터베이스, 알고리즘 등 다양한 과목을 수강하며 이론과 실습을 병행.",
      "팀 프로젝트를 통해 협업 능력과 문제 해결 능력을 향상시킴.",
    ],
  },
  {
    title: "Techeer",
    company_name: "개발자 커뮤니티",
    // icon: techeer, // 아이콘 변수가 정의되어 있지 않아 주석 처리합니다. 필요시 주석을 해제하고 변수를 정의하세요.
    iconBg: "#ffffff",
    date: "Feb 2025 - present",
    points: [
      "Techeer 개발자 커뮤니티에서 프론트엔드 개발자로 다양한 프로젝트와 스터디에 적극 참여",
      "React 기반의 웹 프론트엔드 개발을 중심으로 실무 역량 강화.",
      "팀원들과 협업하여 기획부터 개발, 배포까지 전 과정을 경험",
      "코드 리뷰와 기술 공유를 통해 지속적으로 개발 역량 향상 도모",
    ],
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(experiences);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}