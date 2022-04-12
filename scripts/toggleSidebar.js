var sidebar = document.getElementsByClassName("sidebar-holder")[0];

function toggleSidebar() {
  if (sidebar != null) {
    if (sidebar.style.display === "block")
      sidebar.style.display = "none";
    else
      sidebar.style.display = "block";
  }
}
