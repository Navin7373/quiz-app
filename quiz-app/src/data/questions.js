const questions = [

  // HTML QUESTIONS

  {
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    category: "HTML",
    question: "Which tag creates a hyperlink?",
    options: ["<p>", "<link>", "<a>", "<h1>"],
    answer: "<a>",
  },

  {
    category: "HTML",
    question: "Which tag is used for images?",
    options: ["<image>", "<pic>", "<src>", "<img>"],
    answer: "<img>",
  },

  {
    category: "HTML",
    question: "Which tag creates a line break?",
    options: ["<break>", "<hr>", "<br>", "<lb>"],
    answer: "<br>",
  },

  {
    category: "HTML",
    question: "Which tag creates a paragraph?",
    options: ["<text>", "<p>", "<para>", "<pg>"],
    answer: "<p>",
  },

  {
    category: "HTML",
    question: "Which HTML element is used for tables?",
    options: ["<tr>", "<tb>", "<td>", "<table>"],
    answer: "<table>",
  },

  {
    category: "HTML",
    question: "Which input type hides password text?",
    options: ["hidden", "password", "secure", "text"],
    answer: "password",
  },

  {
    category: "HTML",
    question: "Which tag is used for headings?",
    options: ["<title>", "<head>", "<h1>", "<p>"],
    answer: "<h1>",
  },

  {
    category: "HTML",
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<li>", "<list>", "<ul>"],
    answer: "<ul>",
  },

  {
    category: "HTML",
    question: "Which tag is used for forms?",
    options: ["<input>", "<button>", "<form>", "<label>"],
    answer: "<form>",
  },



  // CSS QUESTIONS

  {
    category: "CSS",
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "bgcolor", "color"],
    answer: "color",
  },

  {
    category: "CSS",
    question: "Which property changes background color?",
    options: ["background", "bgcolor", "background-color", "color"],
    answer: "background-color",
  },

  {
    category: "CSS",
    question: "Which property changes font size?",
    options: ["text-size", "font-style", "size", "font-size"],
    answer: "font-size",
  },

  {
    category: "CSS",
    question: "Which property makes text bold?",
    options: ["text-bold", "font-style", "font-weight", "weight"],
    answer: "font-weight",
  },

  {
    category: "CSS",
    question: "Which display value creates flexbox?",
    options: ["grid", "block", "inline", "flex"],
    answer: "flex",
  },

  {
    category: "CSS",
    question: "Which property adds spacing inside element?",
    options: ["margin", "spacing", "border", "padding"],
    answer: "padding",
  },

  {
    category: "CSS",
    question: "Which property adds outside spacing?",
    options: ["gap", "padding", "space", "margin"],
    answer: "margin",
  },

  {
    category: "CSS",
    question: "Which property rounds corners?",
    options: ["radius", "round", "corner", "border-radius"],
    answer: "border-radius",
  },

  {
    category: "CSS",
    question: "Which property adds shadow?",
    options: ["shadow", "text-shadow", "filter", "box-shadow"],
    answer: "box-shadow",
  },

  {
    category: "CSS",
    question: "Which property aligns text center?",
    options: ["justify", "align-text", "center", "text-align"],
    answer: "text-align",
  },



  // JAVASCRIPT QUESTIONS

  {
    category: "JavaScript",
    question: "Which keyword declares variable?",
    options: ["define", "int", "string", "let"],
    answer: "let",
  },

  {
    category: "JavaScript",
    question: "Which method prints console output?",
    options: ["print()", "display()", "console.log()", "write()"],
    answer: "console.log()",
  },

  {
    category: "JavaScript",
    question: "Which symbol is used for comments?",
    options: ["#", "**", "//", "<!-- -->"],
    answer: "//",
  },

  {
    category: "JavaScript",
    question: "Which method converts JSON to object?",
    options: [
      "JSON.stringify()",
      "JSON.object()",
      "JSON.parse()",
      "JSON.convert()"
    ],
    answer: "JSON.parse()",
  },

  {
    category: "JavaScript",
    question: "Which loop repeats code?",
    options: ["iterate", "repeat", "for", "loop"],
    answer: "for",
  },

  {
    category: "JavaScript",
    question: "Which keyword creates function?",
    options: ["define", "method", "func", "function"],
    answer: "function",
  },

  {
    category: "JavaScript",
    question: "Which operator checks equality?",
    options: ["=", "!=", "=>", "==="],
    answer: "===",
  },

  {
    category: "JavaScript",
    question: "Which array method adds element?",
    options: ["append()", "insert()", "add()", "push()"],
    answer: "push()",
  },

  {
    category: "JavaScript",
    question: "Which keyword exits loop?",
    options: ["stop", "return", "exit", "break"],
    answer: "break",
  },

  {
    category: "JavaScript",
    question: "Which keyword handles errors?",
    options: ["catch", "throw", "error", "try"],
    answer: "try",
  },



  // REACT QUESTIONS

  {
    category: "React",
    question: "React is a ____?",
    options: ["Framework", "Database", "Language", "Library"],
    answer: "Library",
  },

  {
    category: "React",
    question: "Which hook manages state?",
    options: ["useEffect", "useRef", "useMemo", "useState"],
    answer: "useState",
  },

  {
    category: "React",
    question: "Which hook handles side effects?",
    options: ["useFetch", "useState", "useRef", "useEffect"],
    answer: "useEffect",
  },

  {
    category: "React",
    question: "Which prop renders child content?",
    options: ["props", "render", "child", "children"],
    answer: "children",
  },

  {
    category: "React",
    question: "Which method renders list?",
    options: ["filter()", "find()", "forEach()", "map()"],
    answer: "map()",
  },

  {
    category: "React",
    question: "Which package handles routing?",
    options: [
      "react-navigation",
      "router-react",
      "react-path",
      "react-router-dom"
    ],
    answer: "react-router-dom",
  },

  {
    category: "React",
    question: "JSX stands for?",
    options: [
      "JSON XML",
      "Java Extended",
      "JavaScript XML",
      "Java Syntax Extension"
    ],
    answer: "JavaScript XML",
  },

  {
    category: "React",
    question: "Which hook accesses DOM?",
    options: ["useDOM", "useState", "useEffect", "useRef"],
    answer: "useRef",
  },

  {
    category: "React",
    question: "Props are ____?",
    options: [
      "Mutable",
      "Functions",
      "Editable",
      "Read Only"
    ],
    answer: "Read Only",
  },

  {
    category: "React",
    question: "Which command creates React app using Vite?",
    options: [
      "npx create-react-app",
      "npm install react",
      "react new app",
      "npm create vite@latest"
    ],
    answer: "npm create vite@latest",
  },

];

export default questions;