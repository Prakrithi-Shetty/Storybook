import { withStyles, Tabs } from "@material-ui/core";
import { theme } from "../../../constants/theme";

export const Style = (theme) => ({
  mainContent: {
    padding: "38px",
  },
});

export const AntTabs = withStyles({
  root: {},
  indicator: {
    backgroundColor: theme.palette.primary.dark,
    bottom: 10,
  },
})(Tabs);
