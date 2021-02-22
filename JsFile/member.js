class Member {
    constructor({
                memberName,
                memberDescription,
                memberImage,
                codeforcesLink,
                codechefLink,
                leetcode,
                hackerrank,
                linkedIn
            })
    {
        this.codeforcesImg = this.createImageTag({
        src: "./logo/codeforces.png",
        alt: "codeforces"
        });
        this.codeforcesIcon = this.createAttributeImgTag({
        href: codeforcesLink,
        childElements: [this.codeforcesImg]
        });
        this.codechefImg = this.createImageTag({
        src: "./logo/codechef.png",
        alt: "codechef"
        });
        this.codechefIcon = this.createAttributeImgTag({
        href: codechefLink,
        childElements: [this.codechefImg]
        });
        this.leetcodeImg = this.createImageTag({
        src: "./logo/leetcode.png",
        alt: "leetcode"
        });
        this.leetcodeIcon = this.createAttributeImgTag({
        href: leetcode,
        childElements: [this.leetcodeImg]
        });
        this.hackerrankImg = this.createImageTag({
        src: "./logo/hackerrank.png",
        alt: "hackerrank"
        });
        this.hackerrankIcon = this.createAttributeImgTag({
        href: hackerrank,
        childElements: [this.hackerrankImg]
        });
        this.linkedInImg = this.createImageTag({
        src: "./logo/linkedIn.png",
        alt: "linkedIn"
        });
        this.linkedInIcon = this.createAttributeImgTag({
        href: linkedIn,
        childElements: [this.linkedInImg]
        });
        this.iconDiv = this.createDiv({
        className: "iconClass",
        childElements: [this.codeforcesIcon, this.codechefIcon, this.leetcodeIcon, this.hackerrankIcon, this.linkedInIcon]
        });
        this.title = this.createHeadingTag({
        headingType: "h4",
        className: "post-title",
        text: memberName
        });
        this.description = this.createParaTag({
        className: "post-intro",
        text: memberDescription
        });
        this.memberImage = this.createImageTag({
        className: "thumbnail",
        src: memberImage,
        alt: memberName
        });
        this.cardHeaderDiv = this.createDiv({
        className: "post-preview",
        childElements: [this.title, this.description]
        });
        this.cardComponent = this.createDiv({
        className: "post",
        childElements: [this.memberImage, this.cardHeaderDiv, this.iconDiv]
        });
    }
    createAttributeTag({ href = "", target = "_blank", text }) {
        const tagDocument = document.createElement("a");
        tagDocument.href = href;
        tagDocument.target = target;
        const tagTextElement = document.createTextNode(text);
        tagDocument.appendChild(tagTextElement);
        return tagDocument;
    }
    createAttributeImgTag({ href = "", target = "_blank", childElements = []}) {
        const tagDocument = document.createElement("a");
        tagDocument.href = href;
        tagDocument.target = target;
        childElements.forEach(element => {
            tagDocument.appendChild(element);
        })
        return tagDocument;
    }
    createParaTag({ className = null, text = "" }) {
        const paraElement = document.createElement("p");
        if (className) paraElement.className = className;
        const paraText = document.createTextNode(text);
        paraElement.appendChild(paraText);
        return paraElement;
    }
    createDiv({ className = null, childElements = [] }) {
        const divElement = document.createElement("div");
        if (className) divElement.className = className;
        childElements.forEach(element => {
            divElement.appendChild(element);
        });
        return divElement;
    }
    createHeadingTag({ headingType = "h1", className = null, text = "" }) {
        const headingTag = document.createElement(headingType);
        if (className) headingTag.className = className;
        const headingText = document.createTextNode(text);
        headingTag.appendChild(headingText);
        return headingTag;
    }
    createImageTag({ className = null, src = "", alt = "" }) {
        const imageTag = document.createElement("img");
        if (className) imageTag.className = className;
        imageTag.src = src;
        imageTag.alt = alt;
        return imageTag;
    }
    createProjectCard() {
        return this.cardComponent;
    }
}

const createCards = () => {
    memberData.map(member => {
        const projectCard = new Member({
          memberName: member.memberName,
          memberDescription: member.memberDescription,
          memberImage: member.memberImage,
          codeforcesLink: member.codeforcesLink,
          codechefLink: member.codechefLink,
          leetcode: member.leetcode,
          hackerrank: member.hackerrank,
          linkedIn: member.linkedIn,
        }).createProjectCard();
        document.getElementById("member-wrapper-id").appendChild(projectCard);
    });
};

createCards();
