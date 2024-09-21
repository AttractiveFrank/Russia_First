import { useState } from 'react'
import { Menu, MenuItem, Button } from '@mui/material'

const MenuButton = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setSubmenuAnchorEl(null)  // Close both menu and submenu
  }

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget)
  }

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null)
  }

  return (
    <>
      <Button aria-controls={anchorEl ? 'main-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
        {item.title}
      </Button>
      <Menu id="main-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {item.submenu.map((content, index) => (
          <div key={index}>
            <Button>{content.title}</Button>
            <Menu id="submenu" anchorEl={submenuAnchorEl} open={Boolean(submenuAnchorEl)} onClose={handleSubmenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
              transformOrigin={{ vertical: 'top', horizontal: 'left', }}
            >
              {/* <Button onClick={handleClose}>{content[0].title}</Button>
              <Button onClick={handleClose}>{content[1].title}</Button> */}
            </Menu>
          </div>
        ))}
      </Menu>
    </>
  )
}

export default MenuButton
