function useDefineClassName() {
  function defineClassName(isActive: boolean) {
    let className = "tab";

    if (isActive) {
      className += " tab--active";
    }

    return className;
  }

  return {
    defineClassName,
  };
}

export default useDefineClassName;
