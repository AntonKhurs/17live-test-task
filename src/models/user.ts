class User {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
  prevScore: number;
  rank: number;
  prevRank: number;

  constructor(_userId: string,
              _displayName: string,
              _picture: string,
              _score: number,
              _prevScore: number,
              _rank: number,
              _prevRank: number) {
    this.userID = _userId;
    this.displayName = _displayName;
    this.picture = _picture;
    this.score = _score;
    this.prevScore = _prevScore;
    this.rank = _rank;
    this.prevRank = _prevRank;
  }
}

export default User;