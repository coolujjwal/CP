class List {
  constructor ({
    itemText1,
    itemText2,
    link1,
    linkText
  }) {
    this.leftOne = this.createDiv({
      className: "item1",
      text: itemText1
    });
    this.leftTwo = this.createDiv({
      className: "item2",
      text: itemText2
    });
    this.leftItemSource = this.createDiv({
      className: "left-item",
      childElements: [this.leftOne,this.leftTwo]
    });
    this.l3 = this.createAttributeTag({
      href: link1,
      className: "btn0",
      text: linkText
    });
    this.rightThree = this.createDiv({
      className: "item3",
      childElements: [this.l3]
    });
    this.rightItemSource = this.createDiv({
      className: "right-item",
      childElements: [this.rightThree]
    });
    this.rowItemSource = this.createDiv({
      className: "row-item",
      childElements: [this.leftItemSource,this.rightItemSource]
    });
  }
  createAttributeTag({ href = "", target = "_blank",className=null, text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    tagDocument.className=className;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }
  createDiv({ className = null,text="", childElements = [] }) {
    const divElement = document.createElement("div");
    divElement.innerHTML=text;
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }
  createRowCard() {
    return this.rowItemSource;
  }
}


const rowItem1 = () => {
  topic1.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id1").appendChild(projectCard);
    }
  );
};
const rowItem2 = () => {
  topic2.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id2").appendChild(projectCard);
    }
  );
};
const rowItem3 = () => {
  topic3.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id3").appendChild(projectCard);
    }
  );
};
const rowItem4 = () => {
  topic4.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id4").appendChild(projectCard);
    }
  );
};
const rowItem5 = () => {
  topic5.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id5").appendChild(projectCard);
    }
  );
};
const rowItem6 = () => {
  topic6.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id6").appendChild(projectCard);
    }
  );
};
const rowItem7 = () => {
  topic7.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id7").appendChild(projectCard);
    }
  );
};
const rowItem8 = () => {
  topic8.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id8").appendChild(projectCard);
    }
  );
};
const rowItem9 = () => {
  topic9.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id9").appendChild(projectCard);
    }
  );
};
const rowItem10 = () => {
  topic10.map(list => {
      const projectCard = new List({
        itemText1: list.itemText1,
        itemText2: list.itemText2,
        link1: list.link1,
        linkText: list.linkText
      }).createRowCard();
      document.getElementById("post-wrapper-id10").appendChild(projectCard);
    }
  );
};

rowItem1();
rowItem2();
rowItem3();
rowItem4();
rowItem5();
rowItem6();
rowItem7();
rowItem8();
rowItem9();
rowItem10();
