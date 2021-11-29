export interface Villager {
  id: number;
  fileName: string;
  name: Map<string, string>;
  personality: string;
  birthdayString: string;
  birthday: string;
  species: string;
  gender: string;
  subtype: string;
  hobby: string;
  catchPhrase: string;
  iconUri: string;
  imageUri: string;
  bubbleColor: string;
  textColor: string;
  saying: string;
  catchTranslations: Map<string, string>;
}
