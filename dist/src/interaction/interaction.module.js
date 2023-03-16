"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const web3_1 = __importDefault(require("web3"));
const config_2 = require("../../config");
const interaction_controller_1 = require("./interaction.controller");
const schedule_service_1 = require("./schedule/schedule.service");
let InteractionModule = class InteractionModule {
    constructor() {
        this.deployRewardContract = async () => {
            const web3 = new web3_1.default(config_1.NETWORK);
            const contract = new web3.eth.Contract(JSON.parse(config_2.REWARDCONTRACT_ABI));
            try {
                const RewardTx = await contract
                    .deploy({
                    data: config_2.REWARDCONTRACT_BYTECODE,
                    arguments: []
                });
                const createTx = await web3.eth.accounts.signTransaction({
                    data: RewardTx.encodeABI(),
                    gas: 6000000
                }, config_1.PRIVATE_KEY);
                const createReceipt = await web3.eth.sendSignedTransaction(createTx.rawTransaction);
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
InteractionModule = __decorate([
    (0, common_1.Module)({
        controllers: [interaction_controller_1.InteractionController],
        providers: [schedule_service_1.ScheduleService]
    })
], InteractionModule);
exports.InteractionModule = InteractionModule;
//# sourceMappingURL=interaction.module.js.map