const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

  test('1) Create empty object', () => {
    const user = new User()
    expect(user.id).toBeUndefined()
    expect(user.username).toBeUndefined()
    expect(user.name).toBeUndefined()
    expect(user.bio).toBeUndefined()
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

	test('2) Create an User object', () => {
    const user = new User(1, "OntiverosLuis", "Luis", "Bio")
		expect(user.id).toBe(1)
		expect(user.username).toBe("OntiverosLuis")
		expect(user.name).toBe("Luis")
		expect(user.bio).toBe("Bio")
	});

	test('3) Add getters', () => {
    const user = new User(1, "OntiverosLuis", "Luis", "Bio")
		expect(user.getUsername).toBe("OntiverosLuis")
		expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
	});

	test('4) Add setters', () => {
    const user = new User(1, "OntiverosLuis", "Luis", "Bio")
    user.setUsername = "Luison"
		expect(user.username).toBe("Luison")

    user.setBio = "New bio"
		expect(user.bio).toBe("New bio")
	});

})
