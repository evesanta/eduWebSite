### moveコマンド

```
Move こん
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
Approach hoge hoge
```
