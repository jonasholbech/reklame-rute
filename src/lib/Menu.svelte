<script>
  /* const burgerMenu = document.querySelector("#burger-menu");
  const menu = document.querySelector("#menu");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("close");
    menu.classList.toggle("overlay");
  }); */
  let open = false;
</script>

<button id="burger-menu" on:click={() => (open = !open)} class:close={open}>
  Menu
  <span />
</button>

<nav id="menu" class:overlay={open}>
  <slot />
</nav>

<style>
  #burger-menu {
    text-indent: -9999px;
    display: none;
    border: none;
    background: transparent;
    margin: 25px;
    cursor: pointer;
    height: 27px;
    width: 27px;
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 900px) {
    #burger-menu {
      display: block;
    }
    #burger-menu span,
    #burger-menu span:before,
    #burger-menu span:after {
      background: #333;
      display: block;
      height: 3px;
      opacity: 1;
      position: absolute;
      transition: 0.3s ease-in-out;
      content: "";
    }
    #burger-menu span:before {
      left: 0px;
      top: -10px;
      width: 27px;
    }
    #burger-menu span {
      right: 0px;
      top: 13px;
      width: 27px;
    }
    #burger-menu span:after {
      left: 0px;
      top: 10px;
      width: 27px;
    }
    #burger-menu.close span:before {
      top: 0px;
      transform: rotate(90deg);
      width: 27px;
      background: #fff;
    }
    #burger-menu.close span {
      transform: rotate(-45deg);
      top: 13px;
      width: 27px;
      background: #fff;
    }
    #burger-menu.close span:after {
      top: 0px;
      left: 0;
      transform: rotate(90deg);
      opacity: 0;
      width: 0;
      background: #fff;
    }
    #menu {
      z-index: 1;
      min-width: 100%;
      min-height: 100%;
      position: fixed;
      top: 0;
      height: 0;
      visibility: hidden;
      opacity: 0;
      text-align: center;
      padding-top: 20px;
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 1rem;
      align-items: center;
    }
    #menu.overlay {
      visibility: visible;
      opacity: 1;
      padding-top: 100px;
      background: rgba(0, 0, 0, 0.8);
    }
  }
</style>
