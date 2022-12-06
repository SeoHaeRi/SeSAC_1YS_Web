const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "visitor",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        // 모델 옵션
        {
            tableName: "visitor",
            freezeTableName: true,
            timestamps: false // default true 생성, 수정 시간 저장
        }
    );
}

module.exports = Visitor;

