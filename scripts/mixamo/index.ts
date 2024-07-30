/**
 * https://www.mixamo.com/
 * Mixamo Animations 脚本处理
 * @author rdmclin2
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { MotionAnimation } from '@/types/touch';

import { Motion } from './type';

export const root = resolve(__dirname, '../..');
export const srcAnimationsDir = resolve(root, './src/animations');

export const readJSON = (filePath: string) => {
  const data = readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

export const writeJSON = (filePath: string, data: any) => {
  const jsonStr = JSON.stringify(data, null, 2);
  writeFileSync(filePath, jsonStr, 'utf8');
};

type MotionType = 'Motion' | 'Posture';
type Gender = 'Male' | 'Female';

const formatMixamoList = (
  type: MotionType,
  gender: Gender,
  category: string,
  list: Motion[],
): MotionAnimation[] => {
  return list.map((item) => {
    return {
      id: item.motion_id,
      name: item.name,
      type,
      gender,
      category,
      description: item.description,
      url: `https://r2.vidol.chat/animations/${item.motion_id}.fbx`,
      avatar: item.thumbnail_animated,
    };
  });
};

const genList = (type: MotionType) => {
  const genderList: Gender[] = ['Male', 'Female'];
  const motionList: MotionAnimation[] = [];

  for (let gender of genderList) {
    const srcListDir = resolve(__dirname, type, gender);

    const mixamoDirJsonList = readdirSync(srcListDir);
    mixamoDirJsonList.forEach((category) => {
      console.info('processing...', category);
      const inputPath = resolve(__dirname, type, gender, category, './input.json');
      const outputPath = resolve(__dirname, type, gender, category, './output.json');
      const list = readJSON(inputPath);
      const formatList = formatMixamoList(type, gender, category, list);
      motionList.push(...formatList);
      writeJSON(outputPath, formatList);
    });
  }
  const motionsDir = resolve(srcAnimationsDir, type);
  if (!existsSync(motionsDir)) mkdirSync(motionsDir);
  const genderPath = resolve(srcAnimationsDir, type, `index.json`);
  writeJSON(genderPath, motionList);
};

const start = () => {
  const motionList: MotionType[] = ['Motion', 'Posture'];
  for (let motion of motionList) {
    genList(motion);
  }
};

start();
