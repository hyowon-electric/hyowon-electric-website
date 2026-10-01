export type MotorCategory = 'all' | 'hyosung' | 'reducer' | 'vs_motor' | 'dc_motor' | 'flange';

export interface MotorItem {
  id: string;
  model: string;
  manufacturer: string; // 효성모타, 현대중공업, 삼양감속기, 오티스, 을지 등
  category: 'hyosung' | 'reducer' | 'vs_motor' | 'dc_motor' | 'flange' | 'special';
  powerHp: number;
  powerKw: number;
  poles: number; // 2P, 4P, 6P
  voltage: string; // 220V/380V 겸용, 380V/440V 등
  rpm: number | string;
  mountType: '수평(Foot B3)' | '수직(Flange B5)' | '감속기 직결형' | '특수형';
  frameSize: string;
  shaftDiameter: string;
  overhaulStatus: 'A+급 올오버홀 완료' | '코일 신품 재권선 완료' | 'SKF베어링 교체 완료' | '테스트 완료 즉시출고';
  priceEstimate: string;
  inStock: boolean;
  image: string;
  features: string[];
  testReport: {
    insulationResistance: string; // e.g., "500MΩ 이상 (합격)"
    noLoadCurrent: string; // e.g., "14.2A (규격 내 정상)"
    vibrationLevel: string; // e.g., "0.8 mm/s (우수)"
    bearingType: string; // e.g., "NSK 6312 ZZ C3 신품"
  };
}

export interface RepairProcessStep {
  step: number;
  title: string;
  koreanTitle: string;
  summary: string;
  detail: string;
  technicalKey: string;
  image: string;
  checklist: string[];
  equipment: string[];
}

export interface CompanyInfo {
  name: string;
  englishName: string;
  representative: string;
  registrationNumber: string;
  establishedDate: string;
  yearsInBusiness: number;
  address: string;
  detailedAddress: string;
  tel: string;
  fax: string;
  mobile: string;
  email: string;
  bankName: string;
  bankAccount: string;
  bankHolder: string;
  specialties: string[];
}
