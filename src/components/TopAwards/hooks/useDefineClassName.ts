function useDefineClassName() {
  function defineCategoryTypeClassName(categoryType: string) {
    let className = "top-awards__categories__type";

    if (categoryType === "Vencedor") {
      className += " top-awards__categories__type--winner";
    }

    return className;
  }

  return { defineCategoryTypeClassName };
}

export default useDefineClassName;
