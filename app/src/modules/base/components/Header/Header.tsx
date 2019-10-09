import React, { FC } from "react";

import Typography from "@material-ui/core/Typography";

import Logo from "../Logo";

import { HeaderProps } from "./types";
import useStyles from "./styles";

/**
 * The Title component renders a background and an
 * optional title. Intended for use at the top of a
 * page.
 */
export const Header: FC<HeaderProps> = ({ inverted }) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Logo inverted={inverted} baseSize={70} className={classes.logo} />
      <Typography variant="h1" component="div" className={classes.titleText}>
        Race Runner
      </Typography>
    </div>
  );
};