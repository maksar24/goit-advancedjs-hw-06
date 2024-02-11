/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface InterfaceForComponent<T> {
  props: T;
}

interface ComponentProps {
  title: string;
}

class Component implements InterfaceForComponent<ComponentProps> {
  constructor (public props: ComponentProps) {
  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};