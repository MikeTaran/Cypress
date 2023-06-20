describe("depp sypress", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/apps/deep-cypress.html");
  });
  it("should do long like", () => {
    cy.get("section[data-cy=long-like]").as("section");
    cy.get("@section").find("button").click();
    cy.get("@section")
      .find("[data-cy=success]")
      .should("have.text", "Well done!");
  });
  it("should do find child in tree", () => {
    cy.get("section[data-cy=child-in-tree]").as("section");
    cy.get("@section").find("button").click();
    cy.get("@section")
      .find("[data-cy=daddy]")
      .should("not.contain", "Loading")
      //ожидание загрузки динамического элемента 
      .find("[data-cy=child]")
      .should("be.visible");
  });

  it("should do open conduit by link", () => {
    cy.get("section[data-cy=open-conduit-by-link]").as("section");
    cy.get("@section").find("a").invoke("removeAttr", "target").click();
    cy.title().should("contain", "Conduit");
  });

  it.only("should do open conduit in window", () => {
    cy.window().then((window) => {
      cy.stub(window, "open").callsFake((url) => {
        console.log("we have implemented own window.open function");
        window.location = url;
      });
    });

    cy.get("section[data-cy=open-conduit-in-window]").as("section");
    cy.get("@section").find("button").click();
    cy.title().should("contain", "Conduit");
  });
});
