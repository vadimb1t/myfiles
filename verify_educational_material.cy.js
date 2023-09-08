describe("Verify Educational Material on e-koolikott.ee", () => {
  it("should filter and verify educational material", () => {
    // Visit the website
    cy.visit("https://e-koolikott.ee/et/oppematerjal/31832-Proovitoo-materjal");

    // Make sure we are on the correct page
    cy.url().should("eq", "https://e-koolikott.ee/et/oppematerjal/31832-Proovitoo-materjal");

    // Type "Proovitöö" into Search field
    cy.get('[class="search"]').type("Proovitöö");

    // Apply the filter options
    cy.get('[class="swiper-wrapper"]').select("Heli");
    cy.get('[class="tree-wrapper"]').select("Põhiharidus > Kunstiained > Muusika");
    cy.get('[class="ngx-slider"]').select("7. kuni 9. klass");
    cy.get('[class="collapse show"]').select("Kultuuri- ja väärtuspädevus");

    // Verify that the material is displayed
    cy.get('[class="material-card"]').should("exist");
  });
});
