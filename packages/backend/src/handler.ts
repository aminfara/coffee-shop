import awsLambdaFastify from '@fastify/aws-lambda';
import { getApp } from './app.js';

export const handler = awsLambdaFastify(getApp());
