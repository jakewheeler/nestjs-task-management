class FriendsList {
  friends: string[] = [];

  addFriend(name: string) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name: string) {
    console.log(`${name} is now a friend`);
  }

  removeFriend(name: string) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('no friends');
    }

    this.friends.splice(idx, 1);
  }
}

describe('friends list', () => {
  let friendsList: FriendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('jake');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();
    friendsList.addFriend('jake');
    expect(friendsList.announceFriendship).toHaveBeenCalled();
  });

  describe('remove friend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('jake');
      expect(friendsList.friends.length).toBe(1);
      friendsList.removeFriend('jake');
      expect(friendsList.friends.length).toBe(0);
    });

    it('throws an error if friend does not exist', () => {
      expect(() => friendsList.removeFriend('bob')).toThrowError();
    });
  });
});
