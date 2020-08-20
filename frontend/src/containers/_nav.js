import React from "react";
import CIcon from "@coreui/icons-react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["CUSTOMER ANALYTICS"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Credit Risk Analysis",
    //to: '/theme/colors',
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Churn Analysis",
    //to: '/theme/colors',
    icon: "cil-chevron-right",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customer Segmentation",
    //to: '/theme/colors',
    icon: "cil-chevron-right",
  },
];
