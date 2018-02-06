
### Moveコマンド

```
Move 動作補完, @パス開始変位量, 目標位置, 動作オプション
```

#### ホール1からホール3へ動かすプログラム
```
Sub Main
	Takearm Keep = 0
	Speed 100
	
	Move P, @0, P10
	Move P, @0, P[11]
	Move P, @0, P12, Speed = 50
	Move P, @0, P10
	Givearm
End Sub
```

### approachコマンド
```
Approach 動作補完, @パス開始変位量, アプローチ長, 動作オプション
```

#### 変更部分だけ
```
Approach P, P12, @0 30, Speed = 50
```

### DriveAコマンド
```
DriveA @パス開始変位量, 目標位置, 動作オプション
```

### DriveAのプログラム
```
Sub Main
	Takearm Keep = 0
	Speed 100
	DriveA @0 J[1]
	DriveA (7, -70)
	DriveA (7, 0), Speed = 50
	DriveA (1, 90)
	DriveA (1, 0), Speed = 50
End Sub
```

### Departコマンド
```
Depart 動作補間, @パス開始変位量, デパート長, 動作オプション
```

### Departプログラム（変更部分のみ）
```
Depart P, @0 30, Speed = 50
```
