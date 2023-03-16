"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("../../../config");
const web3_1 = __importDefault(require("web3"));
let ScheduleService = class ScheduleService {
    constructor() {
        console.log('THis is Schedule Service');
    }
    async sendPoolReward() {
        const web3 = new web3_1.default(config_1.NETWORK);
        const account = web3.eth.accounts.privateKeyToAccount(config_1.PRIVATE_KEY);
        const contract = new web3.eth.Contract(JSON.parse(config_1.REWARDCONTRACT_ABI), config_1.REWARD_CONTRACT_ADDRESS);
        const Tx = {
            from: account.address,
            to: config_1.REWARD_CONTRACT_ADDRESS,
            data: contract.methods.sendPoolReward().encodeABI(),
            gas: 6000000
        };
        const createTx = await web3.eth.accounts.signTransaction(Tx, config_1.PRIVATE_KEY);
        console.log(createTx);
    }
};
__decorate([
    (0, schedule_1.Cron)(`* * * 1 */1 *`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleService.prototype, "sendPoolReward", null);
ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map