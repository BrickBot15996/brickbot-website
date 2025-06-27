export type TeamProps = {
  name: string;
  number: number;
};

export const brickbot: TeamProps = { name: "BrickBot", number: 15996 };

export const perpetuum: TeamProps = { name: "Perpetuum Mobile", number: 17870 };
export const infinityedge: TeamProps = { name: "InfinityEdge", number: 19060 };
export const alphabit: TeamProps = { name: "AlphaBit", number: 19120 };
export const snaketech: TeamProps = { name: "Snake Tech", number: 19139 };

export const teamList: TeamProps[] = [
  perpetuum,
  infinityedge,
  alphabit,
  snaketech,
];
