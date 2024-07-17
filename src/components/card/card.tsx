import { FlexBox } from "@components/box";
import * as styles from "./card.css";
import { Typography } from "@components/typography";

type CardProps = {
  id: string;
  title: string;
  children: string;
  date: string;
};

export function Card({ title, children, date }: CardProps) {
  return (
    <FlexBox className={styles.container} direction="column">
      <Typography variant="heading">{title}</Typography>
      <Typography as="p" variant="body" className={styles.description}>
        {children}
      </Typography>
      <Typography variant="body" className={styles.date}>
        {date}
      </Typography>
    </FlexBox>
  );
}
