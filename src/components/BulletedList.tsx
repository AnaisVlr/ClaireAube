import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Icons from "../assets/img/icons/Icons.svg"

interface BulletedListProps {
  listItems: string[],
  bulletColor: string
}

export const BulletedList = (props: BulletedListProps) => {
  const { listItems, bulletColor } = props;

  return (
    <>
      <List
        sx={{ width: '100%' }}
        component="nav"
      >
        {listItems.map((item: string) => (
          <ListItem>
            <ListItemIcon>
              {bulletColor === "dark" ? (
                <img src={Icons} alt="Puce" loading="lazy" />
              ) : <img src={Icons} alt="Puce" loading="lazy" />}
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}
