import { Box, FlexBox } from "../box";
import type { ReactNode } from "react";
import { Typography } from "../typography";
import * as styles from "./navigation.css";

type TabInfo = {
  name: string;
  onClick?: () => void;
};

type NavigationProps = {
  icon: ReactNode;
  tabList: TabInfo[];
};

export function Navigation({ icon, tabList }: NavigationProps) {
  return (
    <FlexBox className={styles.container} as="nav">
      {typeof icon === "string" ? (
        <Typography variant="subHeading">{icon}</Typography>
      ) : (
        <>{icon}</>
      )}
      <FlexBox className={styles.tabWrapper}>
        {tabList.map((tab: TabInfo, index) => {
          return (
            <Box
              className={styles.tab}
              onClick={tab.onClick}
              key={`${tab.name}${index}`}
            >
              <Typography variant="body">{tab.name}</Typography>
            </Box>
          );
        })}
      </FlexBox>
    </FlexBox>
  );
}
