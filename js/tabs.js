var tab = function() {
  var tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

      tabNav.forEach(function(item) {
        item.addEventListener('click', selectTabNav)
      });

      function selectTabNav() {
        tabNav.forEach(function(item) {
          item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
      }

      function selectTabContent (tabName) {
        tabContent.forEach(function(item) {
          item.classList.contains(tabName) ? 
          item.classList.add('is-active') : 
          item.classList.remove('is-active');
        })
      }
};

tab();