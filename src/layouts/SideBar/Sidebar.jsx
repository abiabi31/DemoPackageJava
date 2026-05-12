// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   FiHome,
//   FiBook,
//   FiSearch,
//   FiBookmark,
//   FiSettings,
//   FiX,
// } from "react-icons/fi";
// import { FaBible } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTheme as useAppTheme } from "../../context/ThemeContext";
// const menuItems = [
//   { path: "/dashboard", icon: FiHome, label: "dashboard" },
//   {
//     path: "/dashboard/bibletype",
//     icon: FaBible,
//     label: "Bible",
//   },
//   { path: "/dashboard/reader", icon: FiBook, label: "Bible Reader" },
//   { path: "/dashboard/search", icon: FiSearch, label: "Search" },
//   { path: "/dashboard/bookmarks", icon: FiBookmark, label: "Bookmarks" },
//   // { path: "/dashboard/settings", icon: FiSettings, label: "Settings" },
// ];

// const Sidebar = ({ open, onClose }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const muiTheme = useTheme();
//   const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
//   const { theme } = useAppTheme();

//   const handleNavigation = (path) => {
//     navigate(path);
//     if (isMobile) {
//       onClose();
//     }
//   };

//   const sidebarContent = (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//         background:
//           theme === "dark"
//             ? "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
//             : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//         backdropFilter: "blur(10px)",
//       }}
//     >
//       {/* Header with close button for mobile */}
//       {isMobile && (
//         <Box
//           sx={{
//             p: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               color: theme === "dark" ? "white" : "black",
//             }}
//           >
//             Menu
//           </Typography>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onClose}
//             style={{
//               background: "none",
//               border: "none",
//               color: theme === "dark" ? "white" : "black",
//               cursor: "pointer",
//               fontSize: 20,
//             }}
//           >
//             <FiX />
//           </motion.button>
//         </Box>
//       )}

//       {/* Navigation Items */}
//       <List sx={{ p: 1, flex: 1, overflow: "auto" }}>
//         <AnimatePresence>
//           {menuItems.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;

//             return (
//               <motion.div
//                 key={item.path}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <ListItem disablePadding sx={{ mb: 0.5 }}>
//                   <ListItemButton
//                     onClick={() => handleNavigation(item.path)}
//                     sx={{
//                       background: isActive
//                         ? theme === "dark"
//                           ? "rgba(102, 126, 234, 0.3)"
//                           : "rgba(102, 126, 234, 0.2)"
//                         : "transparent",
//                       color: isActive
//                         ? theme === "dark"
//                           ? "#667eea"
//                           : "#667eea"
//                         : theme === "dark"
//                           ? "rgba(255, 255, 255, 0.7)"
//                           : "rgba(0, 0, 0, 0.6)",
//                       borderRadius: "10px",
//                       transition: "all 0.2s ease",
//                       borderLeft: isActive
//                         ? "4px solid #667eea"
//                         : "4px solid transparent",
//                       pl: isActive ? "calc(16px - 4px)" : "16px",
//                       "&:hover": {
//                         background:
//                           theme === "dark"
//                             ? "rgba(255, 255, 255, 0.08)"
//                             : "rgba(102, 126, 234, 0.1)",
//                       },
//                     }}
//                   >
//                     <ListItemIcon
//                       sx={{
//                         minWidth: 40,
//                         color: "inherit",
//                       }}
//                     >
//                       <Icon size={20} />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary={item.label}
//                       sx={{
//                         "& .MuiListItemText-primary": {
//                           fontWeight: isActive ? 600 : 500,
//                           fontSize: "0.95rem",
//                         },
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </List>

//       {/* Footer Info */}
//       <Box
//         sx={{
//           p: 2,
//           borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
//           background: "rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             color:
//               theme === "dark"
//                 ? "rgba(255, 255, 255, 0.5)"
//                 : "rgba(0, 0, 0, 0.5)",
//             display: "block",
//             textAlign: "center",
//           }}
//         >
//           v1.0.0
//         </Typography>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <Box
//         sx={{
//           display: { xs: "none", md: "block" },
//           width: 280,
//           flexShrink: 0,
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "calc(100vh - 64px)",
//             position: "fixed",
//             left: 0,
//             top: 64,
//             overflowY: "auto",
//             width: 280,
//           }}
//         >
//           {sidebarContent}
//         </Box>
//       </Box>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={onClose}
//         sx={{
//           display: { xs: "block", md: "none" },
//         }}
//         PaperProps={{
//           sx: {
//             width: 280,
//           },
//         }}
//       >
//         {sidebarContent}
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;
