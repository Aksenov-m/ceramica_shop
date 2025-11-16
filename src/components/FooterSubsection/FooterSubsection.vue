<template>
    <footer class="footer-subsection">
      <div class="footer-brand">Ceramic Aksenova</div>
      <div class="footer-icons">
        <svg class="footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#333333"/>
        </svg>
        <svg class="footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 21V13C16 12.4 15.6 12 15 12H9C8.4 12 8 12.4 8 13V21" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="footer-copyright">© 2024 Ceramic Aksenova. All rights reserved.</p>
    </footer>
</template>
  
<script setup>
</script>
  
<style scoped>
.footer-subsection {
  padding: 40px 20px 20px;
  text-align: center;
  background-color: #FAF9F6;
  width: 100%;
  max-width: 380px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
}

.footer-brand {
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 16px;
}

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.footer-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.footer-icon:hover {
  opacity: 1;
}

.footer-copyright {
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: #666666;
  margin: 0;
}
</style>