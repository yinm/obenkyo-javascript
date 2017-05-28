/**
 * @param {string} firstName 姓
 * @param {string} lastName 名
 * @throws {Error} firstNameかlastNameが足りません。
 * @author yinm
 * @version 1.0.0
 * @constructor
 */
let Member = function(firstName, lastName) {
  if (firstName === undefined || lastName === undefined) {
    throw new Error('firstNameかlastNameが足りません。');
  }
  this.firstName = firstName;
  this.lastName  = lastName;
};

/**
 * メンバーに関する詳細情報を表示する
 * @returns {string} メンバーの氏名
 * @deprecated {@link Member#toString}メソッドの代わりに利用してください
 */
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

/**
 * Memberクラスの内容を文字列化します。
 * @returns {string} メンバーの氏名
 */
Member.prototype.toString = function() {
  return this.lastName + ' ' + this.firstName;
};