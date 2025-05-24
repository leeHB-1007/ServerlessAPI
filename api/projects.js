const MyPortfolio = '/Port.png';
const Lawmon = '/Lawmon.png';
const BookClip = '/BookClip.png';
const HP = '/3HP.png';

const projects = [
{
    name: "HB's Portfolio",
    description:
      "이 프로젝트는 이현빈이라는 사람이 개발자로써 배워왔던 기술들로 다른 개발자들과 협업하여 개발한 프로젝트들을 나열하는 웹 프로젝트 입니다.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "MSW",
        color: "pink-text-gradient",
      },
      {
        name: "Tanstack-Query",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },{
        name: "GSAP",
        color: "green-text-gradient",
      }
    ],
    image: MyPortfolio,
    source_code_link: "https://github.com/leeHB-1007/My_Portfolio",
  },
  {
    name: "LAWMON",
    description:
      "LAWMON은 AI를 활용한 계약서 분석 및 법률 전문가와 협업하여 법률 문서를 분석하고, 사용자와 전문가와 직접적인 대화를 통해 계약 조건에 위험성을 알려주는 웹 베이스 플랫폼입니다.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Tanstack-Query",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
    ],
    image: Lawmon,
    source_code_link: "https://github.com/LawmonProject",
  },
  {
    name: "BookClip",
    description:
      "BookClip은 서점 사이트에 있는 정보를 토대로 AI를 사용하여줄거리를 쇼츠형태로 사용자에게 제공하고, 책을 읽으면서 인상 깊은 구절을 클립으로 저장하고, 다른 사용자들과 공유할 수 있는 플랫폼입니다. 사용자는 쇼츠를 통해 책의 내용을 요약하고, 다른 사용자들과 소통할 수 있는 크롬 익스텐션 서비스입니다.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "white-text-gradient",
      },
      {
        name: "pnpm",
        color: "pink-text-gradient",
      },
    ],
    image: BookClip,
    source_code_link: "https://github.com/2024-Winter-Bootcamp-Team-A",
  },
  {
    name: "3HP",
    description:
      "3HP는 사용자가 원하는 사진을 업로드하면, 그 사진에 딥페이크 방지 기술을 사용하여, 사용자가 원하는 사람의 얼굴로 바꿔주는 웹 베이스 플랫폼입니다. 사용자는 업로드한 사진을 통해 다양한 얼굴로 변환된 이미지를 생성할 수 있습니다.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: HP,
    source_code_link: "https://github.com/leeHB-1007/3HP_INU_CAPSTONE",
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}