context('Actions', () => {
    // Refresh the Vue app before each test
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    })

    // Add a new Task
    it('Adds a new task', () => {
        cy.wait(5000);
        cy.get('[data-cy=taskInput]').type('Task 1', { delay: 1000 });
        cy.wait(5000);
        cy.get('[data-cy=taskSubmit]').click();
        cy.wait(5000);
    });
    
    // Validate that the new task has been created
    it('Finds the new task', () => {
        cy.wait(5000);
        cy.get('[data-cy=taskContainer]').first().should('contain', 'Task 1');
        cy.wait(5000);
    });
    
    // Mark a Task as completed
    it('Clicks the checkbox to mark the task as completed', () => {
        cy.wait(5000);
        cy.get('[data-cy=taskCheck]').click();
        cy.wait(5000);
    });

    // Validate that the Task is completed
    it('Verifies that the task is completed', () => {
        cy.wait(5000);
        cy.get('.todo-item p label').first().should('have.class', 'is-complete');
        cy.wait(5000);
    });
    
    // Remove a Task
    it('Removes the task', () => {
        cy.wait(5000);
        cy.get('[data-cy=taskDelete]').click();
        cy.wait(5000);
    });
  
    // Validate that the task has been removed
    it('Validates that the task has been removed', () => {
        cy.wait(5000);
        cy.get('[data-cy=taskListContainer]').should('be.empty');
        cy.wait(5000);
    });
});