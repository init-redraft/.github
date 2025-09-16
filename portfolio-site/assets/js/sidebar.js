function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    }

function toggleFolder(folderId, event, pathAray = []) {
    event.stopPropagation();
    const folder = document.getElementById(folderId);
    folder.classList.toggle('hidden');
    
    updateBreadcrumb(pathArray);
}

function updateBreadcrumb(patthArray) {
    const breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.textContent = "../" + pathArray.Join("/");
}